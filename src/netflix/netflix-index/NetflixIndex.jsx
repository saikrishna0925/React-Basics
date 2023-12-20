import './NetflixIndex.css';
import { NetflixHeader } from '../netflix-header/NetflixHeader';
import { NetflixMain} from '../netflix-main/NetflixMain'
import { NetflixRegister } from '../netflix-register/NetflixRegister';
export function NetflixIndex(){
  return(
    <div id="banner">
      <div id="shade">
        <NetflixHeader/>
        <main>
          <div>
            <NetflixMain/>
          </div>
        </main>
        <div>
          <NetflixRegister/>
        </div>
      </div>
    </div>
  );
}
