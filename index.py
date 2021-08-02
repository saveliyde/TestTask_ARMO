import re
from tornado.httpserver import HTTPServer
import tornado.web
import tornado.ioloop

ServerData = "Савелий Дедков"

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write(ServerData)

if __name__ == "__main__":
    app = tornado.web.Application([
        (r"/", MainHandler),
    ])
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()