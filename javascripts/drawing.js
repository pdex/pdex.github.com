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
