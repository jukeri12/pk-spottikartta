import React, { useRef, useEffect } from 'react'


const Canvas = props => {

  const canvasRef = useRef(null)

  const drawIt = ctx => {

      // get canvas 2D context and set him correct size
      resize();

      // last known position
      var pos = { x: 0, y: 0 };

      window.addEventListener('resize', resize);
      document.addEventListener('mousemove', draw);
      document.addEventListener('mousedown', setPosition);
      document.addEventListener('mouseenter', setPosition);

      // new position from mouse event
      function setPosition(e) {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }

      // resize canvas
      function resize() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
      }

      function draw(e) {
        // mouse left button must be pressed
        if (e.buttons !== 1) return;

        ctx.beginPath(); // begin

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#c0392b';

        ctx.moveTo(pos.x, pos.y); // from
        setPosition(e);
        ctx.lineTo(pos.x, pos.y); // to

        ctx.stroke(); // draw it!
    }
  }

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    //Our draw come here
    drawIt(context)
  }, [drawIt])

  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas
