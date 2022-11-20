from re import A
from django.shortcuts import render
import mysql.connector as sql
from django.views.decorators.csrf import csrf_exempt


u = ' '
p = ' '
a = ' '
@csrf_exempt
def contact(request):
    global u, p,a
    if request.method=="POST":
        mycon=sql.connect(host="localhost", user="root",password="12345678",database="hubnet")
        mycur=mycon.cursor()
        d=request.POST
        for key,value in d.items():
            if key=="name":
                u=value
            if key=="email":
                p=value
            if key=="text":
                a=value
            
        q= "insert into textarea values('{}', '{}', '{}' )".format(u,p,a)
        mycur.execute(q)
        mycon.commit()
    return render (request, "index.html")   



# Create your views here.
