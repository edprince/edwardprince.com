---
layout: post
title:  "Jekyll continued"
date:   2016-03-18 09:59:05
categories: tech
---

### Carrying on with Jekyll

This post is going to continue where I left off from my previous post, about
Jekyll. So we now know how to include html in other html files using Liquid.
So, now think of the html that is needed to be included. We are talking about
HTML that will be required in every page. So, there will almost always be the
`head.html` file, containing links to external CSS, and meta tags. Sometimes
they will also include links to the JavaScript files, but better practice is to
add those further down the file. Why? Say we have a huge JS file, and several
libraries that need to be loaded, a device on a slow network may take a long
time to load that page. If the JavaScript is being loaded at the top of the
page, then the rest of the HTML will only be displayed once they have been fully
loaded. The alternative is to link the JS further down the page. What this
allows is for the HTML to load up, giving the user something to look at - some
sort of feedback much more quickly, before the JavaScript fills in when it is
ready.

So, alongside the `head.html`, there will likely be some sort of navigation on
each page, often stored in another file called `header.html`. Finally, the other
default file in there will usually be `footer.html`, containing the HTML for the
footer that will be displayed on every page. I am saying 'usually', because if
you use other people's themes, there is nothing to stop them removing these
files and adding different ones instead, so it might not always be true, but it
will if you use the default Jekyll theme. 

The files in the `_layouts` directory will include these files in the layouts
that are appropriate, again, likely to be all of them.

### Creating a new page for the site

To create a new page for the site, you simply need to add a new `something.html`
in the root of the project. I tend to copy one of the existing pages to do this,
but it's not a lot to do from scratch. You just need to use the liquid format to
choose a layout for the page. I like to add a title as well. This would look
like this:
{% highlight html %}
---
layout: page
title: My Title
---
{% endhighlight %}

Now you can just add any HTML you like for this new page. Chances are, that's
all you have to do, the theme will probably now add this automatically to the
navigation menu, as it loops over all the html files in the root of the
directory and adds links to the navigation menu.

### _config.yml

By now you may have noticed the file called `_config.yml`. This is a very
important configuration file with which you should definitely become familiar.
Fortunately it's pretty self explanatory. In here, there is data such as the
site title, a site description, links to social media accounts. Again it will
vary depending on which theme you have. Fill this data out as accurately as
possible. 

## Some Jekyll do's and dont's

# Dont's

 - In the root of the project, there is a directory called `_site`. This has the
   build of the site in, all the HTML after it's been built by Liquid. **don't**
   edit the files inside this folder. It's not dangerous, just a waste of time.
   It can be tempting to try and force the title of a page to change by changing
   it in that directory, but every time you run `jekyll serve`, it will
   overwrite everything in that directory with a new build, changing anything
   you modified.

 - **Don't** be disheartened if it's confusing to begin with, it's bound to be,
   invest some time into learning it, it's worth it!

# Do's

 - Experiment with the default theme to begin with, get and idea for how Jekyll
   works at it's simplest, understand the file system, and then start using
   themes.

 - Try creating your own theme, it's great downloading pre-built themes and
   using theme, but try building one yourself at some point, it's sure to make
   you understand how Jekyll works.

 - Become familiar with SCSS. Many Jekyll themes make use of SCSS, and if you
   want to customize anything, then you will probably want to understand the
   basics of SCSS. It's not essential, you can add CSS to a SCSS file, but it
   makes it easier to have a basic knowledge.

 - Give it time and patience, and have fun!






[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
