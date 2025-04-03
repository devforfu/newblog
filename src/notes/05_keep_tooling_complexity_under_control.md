At the very beginning of working on a new project, it is almost never obvious what is the cost of used technologies and
frameworks is going to be down the road. Adding new libraries and levels of abstraction might seem straightforward, but 
the complexity accumulates as the project matures.

One programming language for the backend, another one for the frontend, one more library for machine learning, another 
framework here and there to deal with data preprocessing and storage, putting everything into a Docker... You name it. 
The complexity of an average software project mounts exponentially with each new tool on the chain. Each of them might 
have great API, seamlessly running Hello World examples, and (at first glance) providing all the necessary capabilities.
But what if you put them all _together_?

Then, things might get less exciting...

## Anecdotal evidence

* A computer vision model is developed and tested on GPU, but it turns out that the target device works _significantly 
faster_ if only the integer registers are used which requires rewriting algorithms that depend on `float32`. A model
quantization tooling coming with the device cannot help: you have to come up with a new implementation

* Running the same Docker image across multiple host operating systems isn't as smooth as expected because some of the 
filesystems are case-sensitive, while others are not

* The `gdb` doesn't work as expected in a Docker container because you're running it in an x86-system emulation regime 
which leads to problems with `ptrace` system call

* Building an app with frontend and backend written in different programming languages leads to duplicate model 
definitions on the both sides. It might be addressed with automation, but, nevertheless, requires duplicated 
definitions and the code generation library has edge cases it cannot handle

* A model evaluation library does compute the metric you need _slightly differently_ compared to the reference 
implementation. The difference became obvious only after the library was integrated

* A powerful model evaluation framework can compute whatever metric you might need, but it does not support the output 
format of your model and requires writing custom data converters and overriding deep hierarchy of classes. Without 
that, you'll not be able to use its most convenient API and have to bear the maintenance costs

* A blog's posts are written in markdown and are automatically converted to HTML for rendering, but there are edge 
cases like code highlighting, light and dark themes, styles, LaTeX snippets, GitHub Gists embedding, none of which
works out of the box

## Simple, simpler, the simplest

Building even a moderately-complex software inevitably introduces multiple levels of indirection, starting from the OS 
and programming language, compilers, language standards, frameworks, and many more. Writing simple abstractions that 
can be easily refactored, replaced, and debugged is crucial to avoid loosing control over complexity. Keep this in mind 
whenever decide to add support for a new feature or integrate a third-party framework that requires _just a little bit 
of tuning_ before it can work with the custom setup.


