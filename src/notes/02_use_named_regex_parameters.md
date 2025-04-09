Some files store information about their content encoded directly in their names. For example, saved machine learning 
model weights might include the epoch number or the value of a tracked metric.

To extract these values from file paths, use regular exceptions. The most convenient way to do so is to
use named [regex placeholders](https://docs.python.org/3/library/re.html#regular-expression-syntax), which allow you to extract a dictionary of values from a string, 
where the keys correspond to the matched parameters.

```python
import ast
import re

def named_match(pattern, string):
    match = re.match(pattern, string)
    return {k: ast.literal_eval(v) for k, v in match.groupdict().items()}

filename = 'epoch=5_val_loss=0.23.ckpt'
regex = r'^epoch=(?P<epoch>\d+)_val_loss=(?P<val_loss>\d+.\d+).ckpt$'
result = named_match(regex, filename)
assert result == {'epoch': 5, 'val_loss': 0.23}
```

Sure, you could also use anonymous regex groups. But this approach is more fragile, because it depends on 
the parameters' ordering.