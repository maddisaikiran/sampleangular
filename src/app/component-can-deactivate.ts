import { Observable } from "rxjs";

export interface ComponentCanDeactivate {
    canLeave: () => boolean;
}
