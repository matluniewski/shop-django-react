import re

import drf_extra_fields.fields as drf_extra_fields
import rest_framework.fields as drf_fields
from rest_framework.exceptions import ValidationError



class Base64ImageField2(drf_extra_fields.Base64ImageField):
    def validate_empty_values(self, data):
        url_regex = r'(?:^|\s)((https?:\/\/)?(?:localhost|[\w-]+(?:\.[\w-]+)+)(:\d+)?(\/\S*)?)'
        if re.match(url_regex, str(data)):
            raise drf_fields.SkipField()
        elif self.required and data == '':
            raise ValidationError('This field may not be blank.')
        else:
            return super().validate_empty_values(data)