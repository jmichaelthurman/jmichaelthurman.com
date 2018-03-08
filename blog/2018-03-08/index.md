---
path: "/blog/how-install-software-anywhere-macOS"
date: "2018-03-08"
title: "How to Install Software from 'Anywhere' on macOS High Sierra"
---

It's been a while since I was focused on being a practicing macOS admin. I just ran across a wrinkle in macOS security that I'd forgotten. I catalog it below for your use and to burn it into my memory.

As I was installing a new endpoint security package on an Mac for testing, I noticed that the _package.app_ file failed to launch and failed to funtion when launched manually. 
 
In my research, I found and followed the current vendor's KB on this issue which instructed me to click "ok" on the package error dialog to be taken to _Settings.app > Security_, where I could click _Allow_ and be on my way.  

Guess what no longer appears in _Settings.app_?.

_Allow_.  

Nowhere. Nothing. 

And...clicking the lock, authenticatng and selcting _Anywhere_ as an allowed devloper doesn't work, either. _Anywere_ isn't an available selection. 

Then, lightning struck. 

_Didn't this change with OS X Sierra (10.12)?_   

Yep. 
###A Forked Path###
To allow "Anywhere" as an approved software developer in HighSierra, there's only a bash command: 

`$ sudo spctl --master-disable`

Then, the process forks....

For mass deployment, or use by the console-loving (I'm writing this in Vim), use

`sudo installer -pkg /Path/to/pkg -target /`

This launches the package, bypassing the user access control, and allows the package to install and run. Without bypassing UAC, it will install, but not run...or run completely.. 
###Feeling Right-Clicky?###
For single deployment, one can _right-click_ (_opt-click_) on the _package.pkg_ and select _Open_ from the context menu.  This will prompt for uac authentication. 

On successful authentication, the package is installed with privileges to launch. 

Afterward, the package starts and runs normatively. 
###Button Up!###
The corollary of the command above  is.... 

`$ sudo spctl --master-enable`

On restart, returning spctl to it's OOBE state seems to allow the application to launch and function. 

If you want to ensure that state, 

`$ sudo spctl --add _Path/To/Application.app_`

This adds the application to the control whitelist. 

In my case, the command was 

`$ spctl --add /Applications/package.app`

I installed it by passing the `-target /` flag to `installer` on the command line. 

Best regards,

Michael 
