<b>This is Picker Helper. It does one thing, picks objects in a 3d environment created with three js for you.</b>

How to use:


<b>First create your picker helper.</b><br>
pickerHelper = new pickerHelper;


<b>Now, use the .pick command to get the mesh your cursor is over.</b><br>
pickerHelper.pick(event, this.scene, this.camera, this.mount);<br>
or<br>
pickerHelper.pick(event, scene, camera, mount);<br>

I have no interest on financial gain for this code and all are permitted to use it as they see fit.<br>
special thanks to the creator of this tutorial: https://threejsfundamentals.org/threejs/lessons/threejs-picking.html<br>
This code is based off their picker method but converted into an object-oriented form for use in React, etc.