from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),

    # This Url needs to be Loaded First for Vue to Work
    path("",
         TemplateView.as_view(template_name="application.html"),
         name="app",
         ),

    # Add your paths here
    path('', include("accounts.urls")),
]
