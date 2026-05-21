from rest_framework import viewsets, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by('-received_at')
    serializer_class = ContactMessageSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        # Send email notification
        message = serializer.instance
        try:
            # Email to admin
            send_mail(
                subject=f'New Partnership Inquiry from {message.full_name}',
                message=f"""
                Name: {message.full_name}
                Email: {message.email}
                Company: {message.company_name}
                Country: {message.country}
                Service Interest: {message.service_interest}
                
                Message:
                {message.message}
                """,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['info@goldenexpro.com'],
                fail_silently=False,
            )
            
            # Auto-reply to sender
            send_mail(
                subject='Thank you for contacting GOLDEN EXPRO',
                message=f"""
                Dear {message.full_name},
                
                Thank you for reaching out to GOLDEN EXPRO. We have received your inquiry and our team will get back to you within 24-48 hours.
                
                Best regards,
                GOLDEN EXPRO Team
                """,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[message.email],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Email error: {e}")
        
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)