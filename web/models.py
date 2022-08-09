from django.db import models


class AdmissionApplication(models.Model):
    full_name = models.CharField(max_length=128)
    email = models.EmailField()
    cap_id = models.IntegerField()
    selected_course = models.CharField(max_length=32)
    dob = models.DateField()
    gender = models.CharField(max_length=32)
    snumber = models.CharField(max_length=32)
    father_name = models.CharField(max_length=120)
    mother_name = models.CharField(max_length=120)
    parent_contact = models.CharField(max_length=32)
    institution = models.CharField(max_length=32)
    passout = models.CharField(max_length=32)
    course_plustwo = models.CharField(max_length=32)
    percentage_obtained = models.CharField(max_length=32)
    
    class Meta:
        verbose_name = "Admission"
        verbose_name_plural="Admission"
        db_table = "web_admission"

    def __str__(self):
        return self.full_name
