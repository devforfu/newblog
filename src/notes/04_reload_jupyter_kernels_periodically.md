Jupyter keeps everything in the global scope.

Every variable or function defined during a session stays in memory until explicitly deleted or the kernel is reloaded. 
Each imported module and function also remains in the scope. 

Because of that, it's a good habit to reload the kernel regularly. Especially, before committing results to version 
control or running a scheduled job. Otherwise, there are plenty of opportunities to get into trouble:

* A function with a local variable whose name matches a variable defined later in the notebook gets overridden after 
the function's cell is re-evaluated.

* A more general case: earlier cells are affected by state introduced in later cells.

* Functions and variables from deleted cells still roam the scope, becoming invisible phantoms &mdash; especially 
short-named ones like `x` or `cnt`, leading to _very annoying_ bugs.

* Outputs produced by older versions of code, leading to unexpected results.

Of course, this list isn't complete.


