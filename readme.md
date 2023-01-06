## Administrador de Nimble Streamer + NODE

Sistema creado para administrar servidor de nimble streamer mediante archivo de configuracion

Editar /etc/nimble/nimble.conf

agregar

'''
ssl_port = 443
ssl_certificate = /etc/letsencrypt/live/live.acme.com/fullchain.pem
ssl_certificate_key = /etc/letsencrypt/live/live.acme.com/privkey.pem

hls_add_program_date_time = true
ssl_http2_enabled=true

udp_so_receive_buffer = 16777216

management_listen_interfaces = 127.0.0.1
management_port = 8083

'''