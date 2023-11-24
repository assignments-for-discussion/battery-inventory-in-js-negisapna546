const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  let counts = {
    healthy: 0,
    exchange: 0,
    failed: 0
  };

  // itrate each battery's present capacity 
  for (const capacity of presentCapacities) {
    const ratedCapacity = 120; 
    const soh = (capacity / ratedCapacity) * 100; 

    // condition for battery SOH
    if (soh > 80) {
      counts.healthy++;
    } else if (soh <= 80 && soh >= 62) {
      counts.exchange++;
    } else {
      counts.failed++;
    }
  }
  return counts;
}

function testBucketingByHealth() {
  console.log('counting batteries');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  console.log("counts",counts)
  
  // Log the counts
  console.log('Healthy batteries:', counts.healthy);
  console.log('Exchange batteries:', counts.exchange);
  console.log('Failed batteries:', counts.failed);


  assert(counts.healthy == 2);
  assert(counts.exchange == 3);
  assert(counts.failed == 1);
}

testBucketingByHealth();
