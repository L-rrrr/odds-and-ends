---
title: What happens when you type a website's name
date: 2026-10-04
kind: tech
prompt: explain what happens when I type a URL, simply
---

Computers don't know names; they know numbers. So the first thing your browser does is ask a DNS server, "what number belongs to this name?" It gets back an IP address.

Then it opens a connection to that address, agrees on encryption (that's the "s" in https), and asks for the page. The server sends back HTML, which tells the browser what else to fetch: styles, scripts, images. Each of those is another request.

> Like asking a friend for someone's address, walking there, knocking, and being handed a letter that lists more places to visit.
