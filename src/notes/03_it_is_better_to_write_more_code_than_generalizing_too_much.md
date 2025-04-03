Don't hide complex functionality behind too generic functions.

```python
def load_model(filename: str):
    model = create_complex_model()
    model.load(filename)
    return model

def create_complex_model():
    base = create_base_model()
    head = create_head_model()
    complex_model = Model(base, head)
    return complex_model

model = load_model(filename)
```

Isn't that bad, right?

Well, what if you need to replace the base model with something else which is still compatible
with the head model? It is not that simple because both parts of the model are saved to the same file and 
are loaded simultaneously. (Example: image or text models with pre-trained backbones).

A better option would be to expose internal functions and classes. It would require more
effort from a caller to re-construct the process but will make it more flexible.
```python
base = create_base_model()
base.load(base_file)
head = create_head_model()
head.load(head_file)
model = Model(base, head)
```

Talking about Machine Learning, many experiments and modelling projects show that it is
better to prefer more "low-level" solutions, smaller pieces of functionality and more
boilerplate to large out-of-the-box frameworks. Very often they give you the entire jungle
without an option to take only a banana.
