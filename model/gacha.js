/**
 * @class
 */
export class SingleGachaLog {
  /**
   * @param {string} uid
   * @param {string} gacha_id
   * @param {string} gacha_type
   * @param {string} item_id
   * @param {string} count
   * @param {string} time
   * @param {string} name
   * @param {string} lang
   * @param {string} item_type
   * @param {string} rank_type
   * @param {string} id
   */
  constructor(
    uid,
    gacha_id,
    gacha_type,
    item_id,
    count,
    time,
    name,
    lang,
    item_type,
    rank_type,
    id
  ) {
    this.uid = uid;
    this.gacha_id = gacha_id;
    this.gacha_type = gacha_type;
    this.item_id = item_id;
    this.count = count;
    this.time = time;
    this.name = name;
    this.lang = lang;
    this.item_type = item_type;
    this.rank_type = rank_type;
    this.id = id;
  }
}

/**
 * @class
 */
export class ZZZGachaLogResp {
  /**
   * @param {string} page
   * @param {string} size
   * @param {SingleGachaLog[]} list
   * @param {string} region
   * @param {number} region_time_zone
   */
  constructor(page, size, list, region, region_time_zone) {
    this.page = page;
    this.size = size;
    this.list = list;
    this.region = region;
    this.region_time_zone = region_time_zone;
  }
}