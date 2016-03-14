---
layout: post
title:  "Making this site"
date:   2016-03-14 13:49:05
categories: tech
---

### First ever post... 

So to me it seemed pretty fitting that the very first post on this blog would be
about the creation of the website it's on, so lets dive straight in!

For some time now, I have been an enthusiast about Jekyll. If you're thinking Mr
Hyde, then head over to their site and have a quick look. Jekyll is currently
allowing me to write this post in simple markdown, rather than HTML, which is a 
lovely benefit, and before I get asked why I'm not using Wordpress, Jekyll
allows total 100% control over the customization of the site. Yes it's a little
harder to get your teeth into. Yes you are not gifted the libraries of widgets
and extensions as you are in Wordpress, but for me the control makes up for that
and more. It frustrates me to no end to be developing a site, and for my design
criteria not to be met, not due to a lack of know-how, but simply because the
platform makes it exceedingly difficult to undertake certain tasks... <strong>Anyway</strong>, 
before I bore you to death, lets get further into the site and the workings of Jekyll.

Rather than develop my own theme from scratch, I have used the fantastic theme
designed by HTML5 Up, and am now customizing the CSS, giving me the look and
feel that is exactly what I want. People might say "you're a web developer,
surely your job is to make these themes, why not make your own?". That's the
territory of the web designer, something I touch on, but not something I pride
myself in. Most of my work is more towards front end applications, building
sites, maintaining sites etc. And I figured, when there is a great free theme
out there, very close to what you have in mind, why re-invent the wheel and
waste time writing it out all from scratch. This also allowed me to get the site
up and running (albeit with a lack of content), but a reasonable prototype, in
one night. Not a bad turn around.

### Challenges

First and foremost, Jekyll is a blogging platform, and yet the theme I have
used, didn't include any blog templates, so that's where a bit of thinking is
done. I was able to copy the blog functionality from an older jekyll site I
maintain, and integrate it - not exactly seamlessly - into this site. The
problems begin to arise mostly with the classes and CSS. The new theme is using
certain classes to style everything, with the integrated blog using old classes,
meaning parts will not match the design of the rest of the site. After scanning
the CSS file, I was able to re-administer more suitable class names to the
elements in the blog page, and with a tiny bit more custom CSS, presto, the
blogging was working.

But <strong>how</strong> exactly does the blog work? To answer this, we'll talk
a bit more about how Jekyll works. It uses a template engine called **Liquid**.
This is where Jekyll really begins coming into its own. Using liquid, we are
able to render markdown as HTML, include HTML files into others and a whole raft
of other things we will get into. So, each post I write is a new file that
belongs in the `_posts/` directory, and it must be named with the following
format: `yyyy-mm-dd-some-name.md`. This allows the engine to work out what it is
and where it should go. Now that we've done this, we get into Liquid.

At the top of this markdown file, we write:
{% highlight html %}
---
layout: blog-post
title: Blog Post Title
date: 2016-03-14 13:49:34
categories: category-of-some-kind
---
{% endhighlight %}

The layout is telling Liquid how to present the rest of the page (excluding the
post content), the title is what will be displayed at the top of the post, and
the date below that. Then we can add categories for self explanatory reasons.
What does this mean? So, without writing any HTML, we can start writing our post
in markdown.

The layouts reside in a `_layouts/` directory, at the same level as `_posts/`.
Inside we can have as many layouts as we want. For example, you could have some
blog posts that were on the left hand side, with a sidebar on the right, and a
different layout that had the sidebar on the left and the post content on the
right. 

We also have an `_includes` directory, in which we can have html files that will
save a <strong>lot</strong> of time. In here we can have a `head.html` file,
which contains all the links to external CSS/Javascript, meta tags, the lot,
anything you would put in the head of a standard HTML file. Then, instead of
having to write it at the top of each page on your site, you can simply include
it using {% raw %} `{% include head.html %}` {% endraw %} on each layout you want it to be included in
(which is probably every layout). 

This has already been a pretty long post, so I'll cut it there for now, but will
continue my lengthy rants about why I love Jekyll in the near future.

Keep up to date with tech @ [Hacker News](https://news.ycombinator.com/)




[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
