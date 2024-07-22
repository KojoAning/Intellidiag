from django.shortcuts import render

def newpage(request):
    return render(request, 'segmentation.html')