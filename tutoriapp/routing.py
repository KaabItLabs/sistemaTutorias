# Channels
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter

# Routing de la app 
# import apps.app.routing

# application = ProtocolTypeRouter({
#     'websocket': AuthMiddlewareStack(
#         URLRouter(
#             apps.app.routing.websocket_urlpatterns
#         )
#     ),
# })