from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions, status
from rest_framework.response import Response
from important_data import STRIPE_API_KEY
import stripe

# Create your views here.

stripe.api_key = STRIPE_API_KEY

@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def test_payment(request):
    
    test_payment_intent = stripe.PaymentIntent.create(
        amount=1000, currency='pln', 
        payment_method_types=['card'],
        receipt_email='test@example.com')

    return Response(status=status.HTTP_200_OK, data=test_payment_intent)