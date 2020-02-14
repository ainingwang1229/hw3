What code draws the blades of grass?
line(x, height-10, x+random(-10, 10), height-10-random(h));

What code makes the "lawnmower" come by? How often does it come by?
if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
When'random(1000) > 999)' which is 1/1000. The 'lawnower' will be come by.

What's the point of the h variable?
The height of grass.

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
Define the start point y value of the grass and the end point y1 value of the grass. Because the land height is 10. 
So the y value of the start point or end point need to minus 10.
