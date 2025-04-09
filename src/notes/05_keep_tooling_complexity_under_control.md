At the very beginning of a project, it is almost never obvious what the long-term cost of chosen technologies and 
frameworks will be. Adding libraries and layers of abstraction may seem straightforward at first, but complexity 
silently accumulates as the project matures.

One programming language for the backend, another for the frontend, a machine learning library here, a data 
preprocessing framework there, a Docker container to wrap it all... You name it.

The complexity of an average software project grows exponentially with each new link in the chain. Each tool might 
offer a clean API, seamless Hello World examples, and seemingly all the functionality you need — individually. But what 
happens when you put them all _together_?

Then, things might get... less exciting.

## Anecdotal evidence

* A computer vision model is developed and tested on GPU, but the target device runs _significantly 
faster_ when using only integer registers &mdash; requiring a manual rewrite of `float32`-dependent algorithms. A model
quantization tooling coming with the device cannot help: you have to come up with a new implementation.

* Docker image that works fine locally runs into filesystem inconsistencies across hosts: some operating systems 
are case-sensitive, others are not, leading to subtle and hard-to-debug errors.

* The `gdb` doesn't work as expected in a Docker container because you're running it in an x86-system emulation regime 
which leads to problems with `ptrace` system call.

* Building an app with frontend and backend written in different programming languages leads to _duplicate model 
definitions_ on both sides. It can be addressed with automation, but there are edge cases that the code generation
library cannot fully handle.

* A model evaluation library does compute the metric you need _slightly differently_ compared to the reference 
implementation. The difference became obvious only after the library was integrated.

* A powerful model evaluation framework computes whatever metric you might need, but it does not support the output 
format of your model and requires tedious custom data converters. Without that, you'll not be able to use its most 
convenient APIs and have to bear the maintenance costs.

* A blog’s posts are written in Markdown and automatically rendered into HTML, but edge cases pile up: syntax 
highlighting, dark/light themes, LaTeX rendering, GitHub Gist embedding &mdash; none of which works properly out of the 
box.

## Simple, simpler, the simplest

Building even moderately complex software inevitably introduces many layers of indirection &mdash; from the operating
system and language standards to compilers, frameworks, and libraries.

Writing simple abstractions that can be easily refactored, replaced, and debugged is crucial to avoid losing
control over complexity.

Keep this in mind whenever decide to add support for a new feature or integrate a third-party framework that requires 
_just a little bit of tuning_ before it can work with the custom setup.


