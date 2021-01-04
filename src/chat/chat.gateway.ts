import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SecurityService } from '../security/security.service';
import { ChatService } from './chat.service';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private securityService: SecurityService,
    private chatService: ChatService,
  ) {
  }

  @SubscribeMessage('chat_log')
  async identity(@MessageBody() data: any): Promise<void> {
    const jwtToken = await this.securityService.validateToken(data.token);
    await this.chatService.logChat({
      userId: jwtToken.sub,
      text: data.text,
    });
    this.server.emit('chat_publish', data.text);
  }
}
