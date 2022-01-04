<html>
    <head> 
        <link rel="stylesheet" href="stopwatch.css">
    </head>
    <body>
        <div id="main">
        <h1> Stopwatch</h1>
        <h2>Javascript</h2>
        
        <textarea readonly id="stopwatch">00:00:00</textarea>
        <div>
            
           <button id="start" onClick="startTimer()">Start</button>
            <button id="stop" onClick="stopTimer()">Stop</button>
            <button id="reset" onClick="resetTimer()">Reset</button>
        </div>
        </div>
        <script src="stopwatch.js"></script>
    </body>
</html>
