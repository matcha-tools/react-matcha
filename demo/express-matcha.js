function matchaWrap(schema){

  function matcha(req,res,next){
    console.log(schema);
    res.end(200);
    next();
  }

  return matcha;
}



function getIndexHTMLString(){
  const html=`
  
  <!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
  <title></title>
  <link rel="stylesheet" href="matcha.css">
  <style>
    /* width */
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        border-left: 1px solid white;
    }
    

  
    /* Track */
    ::-webkit-scrollbar-track {
        background: #000; 
    }
    ::-webkit-scrollbar-track:focus {
      outline:none;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #999; 
    }
  
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #d64292; 
    }

    .CodeMirror-scrollbar-filler {
      background:black;
      border-top: 1px solid white;
      border-left: 1px solid white;
    }
    </style>  
<link href="/matcha/matcha.css" rel="stylesheet"></head>

<body>

  <main>
    <div id="root"></div>
  </main>

<script type="text/javascript" src="/matcha/bundle.js"></script></body>

</html>
  
  `
  return html;
}


module.exports ={
  matchaWrap
}