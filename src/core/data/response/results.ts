// import { Data } from './Data';

export class Results {

    private _address: number;
    public get address(): number {
        return this._address;
    }
    public set address(v: number) {
        this._address = v;
    }

    private _address_type: number;
    public get address_type(): number {
        return this._address_type;
    }
    public set address_type(v: number) {
        this._address_type = v;
    }

    private _airspeed: number;
    public get airspeed(): number {
        return this._airspeed;
    }
    public set airspeed(v: number) {
        this._airspeed = v;
    }

    private _alt_hold: boolean;
    public get alt_hold(): boolean {
        return this._alt_hold;
    }
    public set alt_hold(v: boolean) {
        this._alt_hold = v;
    }

    private _altitude_type: string;
    public get altitude_type(): string {
        return this._altitude_type;
    }
    public set altitude_type(v: string) {
        this._altitude_type = v;
    }

    private _approach_mode: boolean;
    public get approach_mode(): boolean {
        return this._approach_mode;
    }
    public set approach_mode(v: boolean) {
        this._approach_mode = v;
    }

    private _auto_airgrnd: boolean;
    public get auto_airgrnd(): boolean {
        return this._auto_airgrnd;
    }
    public set auto_airgrnd(v: boolean) {
        this._auto_airgrnd = v;
    }

    private _autopilot: boolean;
    public get autopilot(): boolean {
        return this._autopilot;
    }
    public set autopilot(v: boolean) {
        this._autopilot = v;
    }

    private _barometric_altitude: number;
    public get barometric_altitude(): number {
        return this._barometric_altitude;
    }
    public set barometric_altitude(v: number) {
        this._barometric_altitude = v;
    }

    private _barometric_pressure_setting: number;
    public get barometric_pressure_setting(): number {
        return this._barometric_pressure_setting;
    }
    public set barometric_pressure_setting(v: number) {
        this._barometric_pressure_setting = v;
    }

    private _barometric_vert_rate: number;
    public get barometric_vert_rate(): number {
        return this._barometric_vert_rate;
    }
    public set barometric_vert_rate(v: number) {
        this._barometric_vert_rate = v;
    }

    private _callsign: string;
    public get callsign(): string {
        return this._callsign;
    }
    public set callsign(v: string) {
        this._callsign = v;
    }

    private _callsign_ident: string;
    public get callsign_ident(): string {
        return this._callsign_ident;
    }
    public set callsign_ident(v: string) {
        this._callsign_ident = v;
    }

    private _east_velocity: number;
    public get east_velocity(): number {
        return this._east_velocity;
    }
    public set east_velocity(v: number) {
        this._east_velocity = v;
    }

    private _emergency_status: number;
    public get emergency_status(): number {
        return this._emergency_status;
    }
    public set emergency_status(v: number) {
        this._emergency_status = v;
    }

    private _flight_plan_id: string;
    public get flight_plan_id(): string {
        return this._flight_plan_id;
    }
    public set flight_plan_id(v: string) {
        this._flight_plan_id = v;
    }

    private _geometric_altitude: number;
    public get geometric_altitude(): number {
        return this._geometric_altitude;
    }
    public set geometric_altitude(v: number) {
        this._geometric_altitude = v;
    }

    private _geometric_vert_rate: number;
    public get geometric_vert_rate(): number {
        return this._geometric_vert_rate;
    }
    public set geometric_vert_rate(v: number) {
        this._geometric_vert_rate = v;
    }

    private _ground_speed: number;
    public get ground_speed(): number {
        return this._ground_speed;
    }
    public set ground_speed(v: number) {
        this._ground_speed = v;
    }

    private _heading: number;
    public get heading(): number {
        return this._heading;
    }
    public set heading(v: number) {
        this._heading = v;
    }

    private _ident: boolean;
    public get ident(): boolean {
        return this._ident;
    }
    public set ident(v: boolean) {
        this._ident = v;
    }

    private _latitude: number;
    public get latitude(): number {
        return this._latitude;
    }
    public set latitude(v: number) {
        this._latitude = v;
    }

    private _lnav: boolean;
    public get lnav(): boolean {
        return this._lnav;
    }
    public set lnav(v: boolean) {
        this._lnav = v;
    }

    private _longitude: number;
    public get longitude(): number {
        return this._longitude;
    }
    public set longitude(v: number) {
        this._longitude = v;
    }

    private _north_velocity: number;
    public get north_velocity(): number {
        return this._north_velocity;
    }
    public set north_velocity(v: number) {
        this._north_velocity = v;
    }

    private _nvav: boolean;
    public get nvav(): boolean {
        return this._nvav;
    }
    public set nvav(v: boolean) {
        this._nvav = v;
    }

    private _pressure_alt_disabled: boolean;
    public get pressure_alt_disabled(): boolean {
        return this._pressure_alt_disabled;
    }
    public set pressure_alt_disabled(v: boolean) {
        this._pressure_alt_disabled = v;
    }

    private _radio_height: boolean;
    public get radio_height(): boolean {
        return this._radio_height;
    }
    public set radio_height(v: boolean) {
        this._radio_height = v;
    }

    private _selected_alt: number;
    public get selected_alt(): number {
        return this._selected_alt;
    }
    public set selected_alt(v: number) {
        this._selected_alt = v;
    }

    private _selected_heading: number;
    public get selected_heading(): number {
        return this._selected_heading;
    }
    public set selected_heading(v: number) {
        this._selected_heading = v;
    }

    private _single_antenna: boolean;
    public get single_antenna(): boolean {
        return this._single_antenna;
    }
    public set single_antenna(v: boolean) {
        this._single_antenna = v;
    }

    private _tcas_operational: boolean;
    public get tcas_operational(): boolean {
        return this._tcas_operational;
    }
    public set tcas_operational(v: boolean) {
        this._tcas_operational = v;
    }

    private _tcas_resolution: boolean;
    public get tcas_resolution(): boolean {
        return this._tcas_resolution;
    }
    public set tcas_resolution(v: boolean) {
        this._tcas_resolution = v;
    }

    private _track_angle: number;
    public get track_angle(): number {
        return this._track_angle;
    }
    public set track_angle(v: number) {
        this._track_angle = v;
    }

    private _utc_timing: boolean;
    public get utc_timing(): boolean {
        return this._utc_timing;
    }
    public set utc_timing(v: boolean) {
        this._utc_timing = v;
    }
}