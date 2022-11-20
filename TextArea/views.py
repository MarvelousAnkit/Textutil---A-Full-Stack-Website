from django.shortcuts import render




def index(request):
    return render(request, 'index.html')

def contacts (request):
    if request.method=="post":
        print("done dana done")