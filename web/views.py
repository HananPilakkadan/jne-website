from django.shortcuts import render

from web.forms import AdmissionForm


#form registration
def create_admission(request):
    if request.method == "POST":
        form = AdmissionForm(request.POST)   

        if form.is_valid():
            form.save()
        else:
            print(form.errors.as_text)

        return render(request, 'form.html')

    else:
        return render(request, 'form.html')
