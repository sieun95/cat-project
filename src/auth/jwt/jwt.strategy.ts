import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
      ignoreExpiration: false,
    });
  }
  //   async validate(Payload) {

  //   }
}

//   async validate(payload: Payload) {
//     const cat = await this.catsRepository.findCatByIdWithoutPassword(
//       payload.sub,
//     );

//     if (cat) {
//       return cat; // request.user
//     } else {
//       throw new UnauthorizedException('접근 오류');
//     }
//   }
// }
