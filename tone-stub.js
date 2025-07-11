(function(){
  if (typeof window.Tone !== 'undefined') return;
  function DummySynth(){ }
  DummySynth.prototype.toDestination = function(){ return this; };
  DummySynth.prototype.triggerAttackRelease = function(){ };
  DummySynth.prototype.triggerAttack = function(){ };
  DummySynth.prototype.triggerRelease = function(){ };

  function createSynth(){ return new DummySynth(); }

  window.Tone = {
    context: { state: 'running' },
    start: async () => {},
    now: () => 0,
    Synth: createSynth,
    MembraneSynth: createSynth,
    MonoSynth: createSynth,
    NoiseSynth: createSynth,
    PolySynth: function(){ return new DummySynth(); },
    MetalSynth: createSynth,
  };
})();
