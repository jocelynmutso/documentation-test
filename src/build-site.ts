#!/usr/bin/env ts-node-script
import * as fs from 'fs'
import * as util  from 'util';
import gitDateExtractor from 'git-date-extractor';

/*
<script>
      window.dandy = { content: %REACT_APP_SITE%};
    </script>
    
*/

interface MdFiles {
  build?: number,
  files: Markdown[],
}

interface Markdown {
  url: string, 
  name: string, 
  content: string,
  build: GitDates
}

interface GitDates {
  created: number,
  modified: number
}


const readdir: (dirName: string) => Promise<string[]> = (dirName) => {
  return util.promisify(fs.readdir)(dirName);
};

async function load(rootDir: string) {
  
  const stamps: Record<string, GitDates> = await gitDateExtractor.getStamps({
    outputToFile: false,
    projectRootPath: __dirname
  }) as Record<string, GitDates>;
  
  const files: Markdown[] = [];
  
  const topicsDirs = await readdir(rootDir)
    .then(next => next.map(n => rootDir + "/" + n));
  for(const topicDir of topicsDirs) {
    const topics = await readdir(topicDir)
      .then(next => next
        .filter(n => n.endsWith(".md"))
        .map(n => topicDir + "/" + n));
     
    topics.forEach(name => {
      
      // add build and push it into result
      files.push({
        build: {modified: 0, created: 0},
        url: name, 
        name: name.substring(rootDir.length+1), 
        content: fs.readFileSync(name, "UTF-8")
      });    
      
        
    });
  }
  return files;
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

const site = {
  build: Math.floor(Date.now()/1000),
  files: result
};

console.log(JSON.stringify(site));
