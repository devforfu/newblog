---
title: A new way to build a blog
categories: [sveltekit, svelte, vercel, typescript]
date: '2025-01-30'
published: false
archived: false
description: Migrating blog from a complex and very manual setup to a more flexible solution
---

After a long break, I finally got some spare time to revive this blog! I realized that one of the factors that stopped
me from writing more often was a complex way of structuring my blog. It used to be a Go app running on a dedicated 
droplet, with custom code to convert Markdown into HTML... (Don't ask!)

Now, this first post in the new old blog still uses Markdown, but with SvelteKit, TypeScript, and Vercel! Here, for 
starters, I am going to describe my current setup.

> Kudos to [Joy of Code](https://joyofcode.xyz/sveltekit-markdown-blog) blogpost which helped me to figure out
> what is necessary to repurpose SvelteKit for a simple blogging platform!

## Brief Summary

For those of you who don't want to waste too much time, here is a brief summary of tools used to run this blog:

1. SvelteKit (full stack),
2. TypeScript for endpoints and pages rendering, 
3. Markdown + Svelte components posts, 
4. Vercel for hosting, and
5. [The repo on GitHub](https://github.com/devforfu/newblog).

That's it!

## Previous Iterations

First of all, I am not a front-end of full-stack developer, but a machine learning engineer and data scientist. 
Therefore, I don't have much expertise in building web apps, even though I created some with simple JavaScript and 
Python (Flask of FastAPI backends).

## SvelteKit

## TypeScript

## Conclusion