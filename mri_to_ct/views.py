from django.shortcuts import render

def mri_to_ct(request):
    return render(request, 'mri_to_ct.html')