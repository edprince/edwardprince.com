---
layout: post
title:  "Foundation"
date:   2016-03-21 23:59:05
categories: jekyll update
---


# What is Foundation?

![Foundation logo](http://antrecu.com/sites/default/files/foundation_logo.png)

You're designing a web-page, and you need to have 3 images horizontally across
the screen, with some text underneath. You might quite rightly think that this
could be achieved using a table, styling it so it has no border colours, or
using floats. Then you also want to make it responsive for mobile devices. No
problem, you can just include a media query in your CSS and change the way it's
structured to show only one picture at a time on a mobile device.

Except there is a problem. You have created a lot of work for yourself. This is
where Foundation comes in. One of the most popular features of Foundation is the
grid system. Was this their idea? Nope, Bootstrap did it before, and probably a
whole load of other devs, but Foundation do it really well. 

The grid system works in a relatively simple way. If you give a `<div>` the
class: `row`, then you can think of the div on the next level in, as a row,
split into 12 columns. Now, you can create more divs in this row that define how
many of these 12 columns it takes up. If we think about our example from before,
if you want 3 images horizontally, we need to think about how to divide our 12
columns equally into 3 parts. 12 / 3 = 4. Our divs need to be 4 columns wide.

To achieve this we would add the following class to a div that is a first-level
child of our `row` div: `medium-4 columns`. Now copy this div and add two more,
with their respective images, and you have the 3 horizontally aligned images.

But didn't I say something about scaling to mobile? You can decide how many
columns each div should take up according to different screen sizes. The
following class would on a large screen, display the 3 images side by side,
and on small or medium screens, show them vertically aligned: `small-12
medium-12 large-4 columns`. That's the basics of the grid system.

#Is that it?

Nope, Foundation doesn't stop here, there is also a lot of extra stuff it
styles. Unless you override, it styles your buttons and input boxes etc., but
personally, I like to change some of this anyway.

Fortunately, Foundation has a nice option to only download the "Essentials"
package, which doesn't include a lot of these extra features. If that wasn't
enough, you can also build a custom download, selecting modules to include,
giving you full control of everything being downloaded.

# Where do I get it?

Head over to [Foundation Zurb](http://foundation.zurb.com/). Here you can choose
to either download to your machine, or get a link. It's worth using the *cdn*
link:

`https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.0/foundation-flex.css` 

or the minified version:

`https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.0/foundation-flex.min.css`

The advantage of the cdn link is that when a user attempts to load
the content from the link destination, it picks a distribution point that is
geographically closest to their computer, allowing for the fastest load time
possible.

If you choose this method though, you are not allowing yourself to use a custom
build of foundation.






[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
