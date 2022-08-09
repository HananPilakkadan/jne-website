from django.contrib import admin

from web.models import AdmissionApplication


class AdmissionAdmin(admin.ModelAdmin):
    list_display = ['full_name','email','cap_id','selected_course','dob','gender','snumber','father_name','mother_name','parent_contact','institution','passout','course_plustwo','percentage_obtained']

admin.site.register(AdmissionApplication, AdmissionAdmin)