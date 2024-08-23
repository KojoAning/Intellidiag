"""
URL configuration for intellidiag project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from home.views import show_home
from segmentation.views import newpage
from breastcancer.views import breastcancer
from mri_to_ct.views import mri_to_ct

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', show_home, name="homepage"),
    path('home/', include('home.urls')),
    path('accounts/', include('accounts.urls')),
    path('dashboards/', include('dashboards.urls')),
    path('page1/', show_home, name="analysis"),
    path('segmentation/', newpage, name="segmentation"),
    path('breastcancer/', breastcancer, name="breastcancer"),
    path('mritoct/', mri_to_ct, name="mri_to_ct")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
