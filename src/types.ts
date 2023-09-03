export type ServerTypes = 'cn' | 'os'
export type serverRegions = 'prod_gf_cn' | 'prod_qd_cn' | 'prod_official_usa' | 'prod_official_euro' | 'prod_official_asia' | 'prod_official_cht'

export interface IUserData {
  current_stamina: number
  max_stamina: number
  stamina_recover_time: number
  accepted_epedition_num: number
  total_expedition_num: number
  expeditions: {
    avatars: string[]
    status: string
    remaining_time: string
    name: string
  }[]
  current_train_score: number
  max_train_score: number
  current_rogue_score: number
  max_rogue_score: number
  weekly_cocoon_cnt: number
  weekly_cocoon_limit: number
  current_reserve_stamina: number
  is_reserve_stamina_full: boolean
}

export interface IUserDataItem {
  /**
   * 是否启用（不启用则不显示，且不获取数据）
   */
  isEnabled: boolean
  /**
   * 服务器类型（国服/海外）
   */
  serverType: ServerTypes
  /**
   * 细分的服务器类型
   */
  serverRegion: serverRegions
  /**
   * 玩家id
   */
  uid: string
  /**
   * 玩家昵称
   */
  nickname: string
  /**
   * 玩家昵称
   */
  level: number
  /**
   * 用户cookie
   */
  cookie: string
  /**
   * 获取的数据
   */
  data: IUserData
  /**
   * 最后一次获取数据的时间
   */
  updateTimestamp: number
  /**
   * 是否出错
   */
  isError?: boolean
  /**
   * 错误信息
   */
  errorMessage?: string
}

export interface IRoleDataItem {
  /**
   * 玩家对应的服务器
   */
  region: serverRegions
  /**
   * 玩家对应的服务器名称
   */
  region_name: string
  /**
   * 玩家uid
   */
  game_uid: string
  /**
   * 玩家昵称
   */
  nickname: string
  /**
   * 玩家等级
   */
  level: number
}

export interface ICaptchaResponse {
  gt: string
  challenge: string
  new_captcha: boolean | number
}

export interface ICaptchaRequest {
  geetest_challenge: string
  geetest_seccode: string
  geetest_validate: string
}

export interface ISettingsMap {
  refreshInterval: number
  badgeVisibility: boolean
}
