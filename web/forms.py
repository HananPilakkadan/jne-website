from django import forms

from web.models import AdmissionApplication


class AdmissionForm(forms.ModelForm):
    class Meta:
        model = AdmissionApplication
        fields = '__all__'
