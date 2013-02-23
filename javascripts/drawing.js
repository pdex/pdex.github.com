function grid_line(ctx, length) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.strokeStyle = "rgba(128, 128, 128, 0.5)";
    ctx.lineTo(0, length);
    ctx.stroke();
    ctx.closePath();
}
function origin_line(ctx, length) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, length);
    var i = 0;
    for (i = 0; i <= length; i = i + 10) {
        ctx.moveTo(-5, i);
        ctx.lineTo(5,i);
    }
    ctx.stroke();
    ctx.closePath();
}
function grid(ctx, w, h) {
    for (var i = 0; i <= w; i += 10) {
        ctx.save();
        ctx.translate(i, 0);
        grid_line(ctx, h);
        ctx.restore();
    }
    for (var i = 0; i <= h; i += 10) {
        ctx.save();
        ctx.translate(w, i);
        ctx.rotate(Math.PI/2);
        grid_line(ctx, w);
        ctx.restore();
    }
    ctx.save();
    ctx.translate(w/2, 0);
    origin_line(ctx, h);
    ctx.restore();
    ctx.save();
    ctx.translate(w, h/2);
    ctx.rotate(Math.PI/2);
    origin_line(ctx, w);
    ctx.restore();
}
function pacman(ctx, scale, step) {
    var steps = [
        {begin: Math.PI/4, end: (7*Math.PI)/4},
        {begin: Math.PI/6, end: (11*Math.PI)/6},
    ];
    var this_step = steps[step%steps.length];
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, scale, this_step.begin, this_step.end);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
    ctx.restore();
}
function ghost(ctx, size, color, step) {
    var steps = [
        {points: [[1, 0], [0.85, -0.25], [0.68, 0], [0.50, -0.25], [0.32, 0], [0.15, -0.25], [0, 0]]},
        {points: [[0.85, 0], [0.68, -0.25], [0.50, 0], [0.32, -0.25], [0.15, 0], [0,-0.25]]},
    ];
    var this_step = steps[step%steps.length];
    ctx.save();
    ctx.translate(-size/2, size/2);
    /*
     ctx.beginPath();
     ctx.moveTo(0,0);
     ctx.arc(0, 0, 5, 0, 2*Math.PI, true);
     ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0,-size);
    ctx.lineTo(size, -size);
    ctx.stroke();
     */
    ctx.beginPath();
    ctx.moveTo(0,size*-0.25);
    var arcStart = -size*0.75;
    ctx.lineTo(0, arcStart);
    ctx.strokeStyle='black';
    ctx.lineWidth = 5;
    ctx.quadraticCurveTo(size *0.15, -size, size/2, -size);
    ctx.quadraticCurveTo(size *0.85, -size, size, arcStart);
    ctx.lineTo(size, size*-0.25);
    this_step.points.forEach(function(point){
        ctx.lineTo(size*point[0], size*point[1]);
    });
    /*
    ctx.lineTo(size*0.85, -size*0.25);
    ctx.lineTo(size*0.68, 0);
    ctx.lineTo(size*0.50, -size*0.25);
    ctx.lineTo(size*0.32, 0);
    ctx.lineTo(size*0.15, -size*0.25);
    */
    ctx.fillStyle = color;
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(size*0.15, -size*0.7, size*0.2, size*0.2);
    ctx.fillRect(size*0.65, -size*0.7, size*0.2, size*0.2);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(size*0.15, -size*0.7, size*0.1, size*0.1);
    ctx.fillRect(size*0.65, -size*0.7, size*0.1, size*0.1);
    ctx.restore();
}
