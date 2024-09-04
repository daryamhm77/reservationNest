import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { isJWT } from "class-validator";
import { Request } from "express";
import { Observable } from "rxjs";
import { AuthMessage } from "src/common/enum/message.enum";
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService)
    async canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const httpcontext = context.switchToHttp();
        const request: Request = httpcontext.getRequest<Request>();
        const token = this.extractToken(request);
        request.user = this.authService.validateAccessToken(token);
        return true;
    }
    protected extractToken(request: Request){
        const {authorization} = request.headers;
        if(!authorization || authorization.trim == ''){
            throw new UnauthorizedException(AuthMessage.LoginIsRequired);
        };
        const[bearer, token] = authorization.split(" ");
        if(bearer?.toLocaleLowerCase() !== "bearer" || !token || !isJWT(token)){
            throw new UnauthorizedException(AuthMessage.LoginIsRequired);
        }
    }
}