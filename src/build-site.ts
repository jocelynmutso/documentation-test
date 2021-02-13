#!/usr/bin/env ts-node-script
import * as fs from 'fs'
import * as util  from 'util';



/*
<script>
      window.dandy = { content: %REACT_APP_SITE%};
    </script>
    
*/

const readdir: (dirName: string) => Promise<string[]> = (dirName) => {
  return util.promisify(fs.readdir)(dirName);
};

async function load(rootDir: string) {
  const content: { url: string, name: string, content: string }[] = [];
  
  const topicsDirs = await readdir(rootDir)
    .then(next => next.map(n => rootDir + "/" + n));
  for(const topicDir of topicsDirs) {
    const topics = await readdir(topicDir)
      .then(next => next
        .filter(n => n.endsWith(".md"))
        .map(n => topicDir + "/" + n));
     
    topics.forEach(name => {
      content.push({url: name, name: name.substring(rootDir.length+1), content: fs.readFileSync(name, "UTF-8")});      
    });
  }
  return content;
}

let result;
load("./src/markdown")
  .then(data => {
    result = data;
  })
  .catch(err => {
    console.error(err);
    result = "failed to read data: " + err;
  });

while(result === undefined) {
  require('deasync').runLoopOnce();
}

console.log(JSON.stringify(result));
