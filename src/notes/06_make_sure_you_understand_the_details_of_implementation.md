# The Fable

There is a metric used to assess the quality of object detection models called **Mean Average Precision**, or **mAP**. 
The abbreviation **mAP** is commonly used in research papers and docstrings.

However, it is not always the same thing. There are at least two different “flavours” — namely, PASCAL VOC and MS COCO. 
Each of these is an object detection benchmark that consists of a set of images, bounding boxes, and a performance 
metric to assess the quality of models trained on those datasets.

The thing is, the first benchmark (VOC) is designed in a way that treats multiple detections of the same object 
differently from what the second one (COCO) does. The VOC flavour counts them as _False Positives_ (FPs) — i.e., it
_penalizes_ the model for producing too many closely located predictions. Here is a snippet from the 
[reference implementation](https://github.com/facebookresearch/detectron2/blob/9604f5995cc628619f0e4fd913453b4d7d61db3f/detectron2/evaluation/pascal_voc_evaluation.py#L20)
implemented in the `detectron2` framework:
```python
if ovmax > ovthresh:
    if not R["difficult"][jmax]:
        if not R["det"][jmax]:
            tp[d] = 1.0
            R["det"][jmax] = 1
        else:
            fp[d] = 1.0  # counts as FP
```
Note the last `else` branch. Code execution gets there in a situation when the predicted bounding box has high confidence 
but the object was already detected — i.e., there is another predicted bounding box already. 

The COCO approaches it [differently](https://github.com/cocodataset/cocoapi/blob/8c9bcc3cf640524c4c20a9c40e89cb6a2f2fa0e9/PythonAPI/pycocotools/cocoeval.py#L289):
```python
for gind, g in enumerate(gt):
    # if this gt already matched, and not a crowd, continue
    if gtm[tind,gind]>0 and not iscrowd[gind]:
        continue
    # if dt matched to reg gt, and on ignore gt, stop
    if m > -1 and gtIg[m] == 0 and gtIg[gind] == 1:
        break
    # continue to next gt unless better match made
    if ious[dind,gind] < iou:
        continue
    # if match successful and best so far, store appropriately
    iou=ious[dind,gind]
    m=gind
```
And this is by design! The metric is implemented this way to avoid penalizing models that produce many detection 
candidates, as some OD architectures tend to generate more proposals than others.

# The Moral

Even though this story describes a very specific and ambiguous situation around machine learning metrics, it is 
not uncommon in general. When choosing what algorithm to use, it never hurts to understand the details of its 
implementation — it might make a huge difference.

