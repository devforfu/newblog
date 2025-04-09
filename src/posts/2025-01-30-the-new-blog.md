---
title: A new way to build a blog
tags: [sveltekit, svelte, vercel, typescript]
date: '2025-01-30'
published: true
archived: false
description: Migrating blog from a complex and very manual setup to a more flexible solution
---
<script>
    import Counter from './counter.svelte'
</script>

After a long break, I finally got some spare time to revive this blog! I realized that one of the factors that stopped 
me from writing more often was the complex way I had structured it before. It used to be a Go app running on a 
dedicated droplet, with custom code to convert Markdown into HTML… (Don’t ask!)

Now, this first post in the new old blog still uses Markdown, but with SvelteKit, TypeScript, and Vercel! Here, for 
starters, I’m going to briefly describe my current setup.

> Kudos to [Joy of Code](https://joyofcode.xyz/sveltekit-markdown-blog) blogpost which helped me to figure out
> what is necessary to repurpose SvelteKit for a simple blogging platform!

## Brief Summary

For those of you who don't want to waste too much time, here is a brief summary of tools used to run this blog:

1. SvelteKit (full stack),
2. TypeScript for endpoints and page rendering, 
3. Markdown + Svelte components for posts, 
4. Vercel for hosting, and
5. [GitHub for the repository](https://github.com/devforfu/newblog).

That's it!

## Previous Iterations

First of all, I’m not a front-end or full-stack developer, but a machine learning engineer and data scientist. 
Therefore, I don’t have much expertise in building web apps, even though I’ve created some with simple JavaScript and 
Python using Flask or FastAPI backends.

My first attempts included Jekyll templates and a Go backend with some basic JavaScript on the front end, without any 
frontend framework whatsoever, hosted on DigitalOcean (DO) in a custom Docker container.

It worked, but making changes was incredibly time-consuming. I didn’t have any CI/CD pipeline or anything like that, 
and each change had to be first pushed to GitHub, then manually pulled to the DO droplet via an SSH connection…

This manual effort — and the cognitive load associated with it — significantly slowed down updates and even the 
desire to push anything here. It was just too complex!

I decided that a new approach was necessary. For a seasoned web developer, it might sound silly, but I discovered the 
benefits of full-stack development. :)

## Full-Stack

So, as mentioned earlier, I switched to running a SvelteKit-based app on Vercel, with TypeScript as the scripting 
language and Markdown for the posts. Markdown is the same format I adopted many years ago, as it’s very straightforward 
and almost like plain-text writing.

One great change, though, is that now I can integrate Svelte components right here.

<Counter />

This might open opportunities for nice interactive visualizations, if I manage to create some.

The components' source code is written directly in the codeblock of the Markdown file and rendered using great 
[`mdsvex`](https://www.npmjs.com/package/mdsvex) preprocessor.

## Up and running!

The blog was refreshed quite quickly, thanks to some knowledge of SvelteKit I’ve gained over the last couple of years, 
great online tutorials, and a bit of LLM-driven code generation. 🤖

A side effect of this work is that the barrier for publishing new notes and posts feels significantly lower 
now — for better or worse…