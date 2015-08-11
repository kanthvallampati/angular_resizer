# Angular Resizer

AngularJS Directive to create resizable DOM elements

Usage
=====

Place resizer.js into your project. Add 'ng.resizer' directive to your app.
<pre>
angular.module('MyApp', ['ng.resizer']);
</pre>

Vertical Resize
---------------
Create a vertical resizer as below in your HTML:

<pre>
&lt;div id="vResizer" resizer="vertical" resizer-width="6" resizer-left="#leftpane" resizer-right="#rightpane" resizer-min="200" resizer-max="600">&lt;/div>
</pre>

You can customize the min-width, max-width, LHS & RHS DOM elements and width of the resizer as well.

Horizontal Resize
-----------------
Create a horizontal resizer as below in your HTML:

<pre>
&lt;div resizer="horizontal" resizer-height="6" resizer-top="#toppane" resizer-bottom="#bottompane" resizer-min="100" resizer-max="300">&lt;/div>
</pre>


You can create multiple resizable elements on DOM using the Angular Resizer.
Download the repository and you can see how it works. The existing example will helps you to understand the functioning.
