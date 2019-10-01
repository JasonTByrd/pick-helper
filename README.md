<b>This is Pick Helper. It does one thing, picks objects in a 3d environment created with three js for you.</b>

How to use:<br>

<b>First, install Pick Helper with this command</b><br>
npm install pick-helper

<b>Now import Pick Helper.</b><br>
import PickHelper from pick-helper;<br>


<b>Next, create your pick helper.</b><br>
pickHelper = new PickHelper(this.scene, this.camera);<br>
or<br>
pickHelper = new PickHelper(scene, camera)<br>


<b>Now you can use the .pick command to get the mesh your cursor is over.</b><br>
pickHelper.pick(event, this.scene, this.camera, this.mount);<br>
or<br>
pickHelper.pick(event, scene, camera, mount);<br>

<b>Furthermore, you may also use the pickCenter method to pick what is in the center of your camera.</b><br>
pickHelper.pickCenter(event, this.scene, this.camera, this.mount);<br>
or<br>
pickHelper.pickCenter(event, scene, camera, mount);<br>

I have no interest on financial gain for this code and all are permitted to use it as they see fit.<br>
special thanks to the creator of this tutorial: https://threejsfundamentals.org/threejs/lessons/threejs-picking.html<br>
This code is based off their PickHelper class but converted into an object-oriented form for use in React, etc. and all contained within said class.
