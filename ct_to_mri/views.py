from django.shortcuts import render

def ct_to_mri(request):
    return render(request, 'ct_to_mri.html')