
export const environment = {
  production: import.meta.env['NG_APP_PRODUCTION'],
  userID: import.meta.env['NG_APP_USER_ID'],
  supabaseUrl: import.meta.env['NG_APP_SUPABASE_URL'],
  supabaseRealtimeUrl: import.meta.env['NG_APP_SUPABASE_REALTIME_URL'],
  supabaseKey: import.meta.env['NG_APP_SUPABASE_KEY'],
  supabaseRealtimeKey: import.meta.env['NG_APP_SUPABASE_REALTIME_KEY'],
  supabaseEndpoint: import.meta.env['NG_APP_SUPABASE_ENDPOINT_SECRETS'],
  supabaseEndpointImg: import.meta.env['NG_APP_SUPABASE_ENDPOINT_MEDIA'],
  supabaseEndpointChats: import.meta.env['NG_APP_SUPABASE_ENDPOINT_CHAT'],
}
