from django.shortcuts import render

def breastcancer(request):
    return render(request, 'breastcancer.html')